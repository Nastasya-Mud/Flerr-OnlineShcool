import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';
import { instructorsAPI } from '../../api/instructors';
import { usersAPI } from '../../api/users';

const Overlay = styled(motion.div)`
  position: fixed; inset: 0; background: rgba(0,0,0,.6);
  display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 2rem;
`;
const Modal = styled(motion.div)`
  background: #fff; border-radius: 16px; padding: 2rem; width: 100%; max-width: 700px; max-height: 90vh; overflow: auto;
`;
const Header = styled.div` display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; `;
const Title = styled.h3` margin: 0; color: #2d3748; `;
const Close = styled.button` background: none; border: 0; cursor: pointer; color: #718096; padding: .5rem; border-radius: 8px; &:hover { background:#f7fafc; color:#2d3748 }`;
const Form = styled.form` display:flex; flex-direction:column; gap: 1rem; `;
const Row = styled.div` display:grid; grid-template-columns:1fr 1fr; gap:1rem; @media (max-width:768px){ grid-template-columns:1fr; }`;
const Input = styled.input` padding:.75rem; border:2px solid #e2e8f0; border-radius:8px; &:focus{ outline:none; border-color:#667eea }`;
const TextArea = styled.textarea` padding:.75rem; border:2px solid #e2e8f0; border-radius:8px; min-height:120px; font-family:inherit; &:focus{ outline:none; border-color:#667eea }`;
const Select = styled.select` padding:.75rem; border:2px solid #e2e8f0; border-radius:8px; background:#fff; &:focus{ outline:none; border-color:#667eea }`;
const ButtonBar = styled.div` display:flex; justify-content:flex-end; gap:1rem; margin-top:.5rem; `;
const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding:.75rem 1.25rem; border-radius:8px; font-weight:600; cursor:pointer; border:2px solid transparent;
  ${p=>p.$variant==='primary'?`background:#667eea;color:#fff;border-color:#667eea; &:hover{background:#5a67d8;border-color:#5a67d8}`:`background:#fff;color:#4a5568;border-color:#e2e8f0; &:hover{background:#f7fafc;border-color:#cbd5e0}`}
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  instructor: any; // объект преподавателя
}

const SPECIALTIES = [
  'wedding-floristry','commercial-floristry','interior-compositions','dry-flowers','artificial-flowers','business-floristry','social-media','event-floristry','seasonal-compositions','modern-floristry','classical-floristry','minimalist-compositions','luxury-compositions','eco-floristry','sustainable-floristry'
];

const EditInstructorModal: React.FC<Props> = ({ isOpen, onClose, onSuccess, instructor }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<any>({ bio:'', experience: 0, specialties: [], education:'', certifications:'', achievements:'', featured:false, avatarFile: null, avatarPreview:'' });

  useEffect(()=>{
    if (!isOpen || !instructor) return;
    setForm({
      bio: instructor?.bio || '',
      experience: instructor?.experience ?? 0,
      specialties: instructor?.specialties || [],
      education: (instructor?.education || []).join('\n'),
      certifications: (instructor?.certifications || []).join('\n'),
      achievements: (instructor?.achievements || []).join('\n'),
      featured: !!instructor?.featured,
      avatarFile: null,
      avatarPreview: instructor?.user?.avatar || ''
    });
  }, [isOpen, instructor]);

  const compressImage = (file: File, maxSize = 1024, quality = 0.8): Promise<string> => new Promise((resolve, reject) => {
    const img = new Image(); const reader = new FileReader();
    reader.onload = () => { img.onload = () => { const canvas = document.createElement('canvas'); let w = (img as HTMLImageElement).width, h = (img as HTMLImageElement).height; const s = Math.min(1, maxSize / Math.max(w,h)); w = Math.round(w*s); h = Math.round(h*s); canvas.width=w; canvas.height=h; const ctx = canvas.getContext('2d'); if(!ctx) return reject(new Error('Canvas')); ctx.drawImage(img,0,0,w,h); resolve(canvas.toDataURL('image/jpeg', quality)); }; img.onerror = reject; img.src = reader.result as string; };
    reader.onerror = reject; reader.readAsDataURL(file);
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      let avatar: string | undefined;
      if (form.avatarFile) avatar = await compressImage(form.avatarFile, 1024, 0.8);
      if (avatar) { try { await usersAPI.update(instructor.user._id, { avatar }); } catch {}
      }
      const payload: any = {
        bio: form.bio.trim(),
        experience: Number(form.experience) || 0,
        specialties: form.specialties,
        education: form.education ? form.education.split('\n').map((x:string)=>x.trim()).filter(Boolean) : [],
        certifications: form.certifications ? form.certifications.split('\n').map((x:string)=>x.trim()).filter(Boolean) : [],
        achievements: form.achievements ? form.achievements.split('\n').map((x:string)=>x.trim()).filter(Boolean) : [],
        featured: !!form.featured,
      };
      await instructorsAPI.update(instructor._id, payload);
      toast.success('Профиль преподавателя обновлён');
      onSuccess();
      onClose();
    } catch (err: any) {
      toast.error(err?.response?.data?.error || 'Ошибка обновления преподавателя');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} onClick={onClose}>
          <Modal initial={{ opacity:0, scale:.95 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:.95 }} onClick={(e)=>e.stopPropagation()}>
            <Header>
              <Title>Редактировать преподавателя</Title>
              <Close onClick={onClose}><X size={22}/></Close>
            </Header>
            <Form onSubmit={handleSubmit}>
              <TextArea placeholder="Биография" value={form.bio} onChange={(e)=>setForm({...form, bio: e.target.value})} />
              <Row>
                <Input type="number" min="0" max="50" value={form.experience} onChange={(e)=>setForm({...form, experience: Number(e.target.value)})} />
                <Select multiple value={form.specialties} onChange={(e)=>setForm({...form, specialties: Array.from(e.target.selectedOptions).map(o=>o.value)})}>
                  {SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
                </Select>
              </Row>
              <Input type="file" accept="image/*" onChange={async (e)=>{ const f=e.target.files?.[0]||null; setForm((p:any)=>({...p, avatarFile:f})); if(f){ const pvw = await compressImage(f,320,0.7); setForm((p:any)=>({...p, avatarPreview:pvw})); } }} />
              {form.avatarPreview && <img src={form.avatarPreview} alt="preview" style={{ width:96, height:96, borderRadius:12, border:'1px solid #e2e8f0' }} />}
              <TextArea placeholder="Образование (каждое с новой строки)" value={form.education} onChange={(e)=>setForm({...form, education: e.target.value})} />
              <TextArea placeholder="Сертификаты (каждый с новой строки)" value={form.certifications} onChange={(e)=>setForm({...form, certifications: e.target.value})} />
              <TextArea placeholder="Достижения (каждое с новой строки)" value={form.achievements} onChange={(e)=>setForm({...form, achievements: e.target.value})} />
              <label style={{ display:'inline-flex', alignItems:'center', gap:8 }}>
                <input type="checkbox" checked={!!form.featured} onChange={(e)=>setForm({...form, featured: e.target.checked})} /> Показать на главной
              </label>
              <ButtonBar>
                <Button type="button" $variant="secondary" onClick={onClose}>Отмена</Button>
                <Button type="submit" $variant="primary" disabled={loading}>{loading?'Сохранение...':'Сохранить'}</Button>
              </ButtonBar>
            </Form>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default EditInstructorModal;


