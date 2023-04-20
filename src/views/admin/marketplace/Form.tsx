import React, { useState } from 'react';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  title: string;
  description: string;
  applicantNeeded: number;
  tags: string[];
}

export const Form = ({ onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({ title: '', description: '', applicantNeeded: 0, tags: [] });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleApplicantNeededChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, applicantNeeded: Number(event.target.value) });
  };

  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, tags: event.target.value.split(',') });
  };

  return (
    <div className="mt-5  h-full grid-cols-1 gap-5 ">
        <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input className="input input-bordered input-info w-full mb-3" type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input 
        className="textarea textarea-bordered textarea-lg w-full"  
        name="description" value={formData.description}
        onChange={handleChange} 
        
        />
      </label>
      <label>
        Applicant Needed:
        <input className="input input-bordered input-info w-full mb-3" type="number" name="applicantNeeded" value={formData.applicantNeeded} onChange={handleApplicantNeededChange} />
      </label>
      <label>
        Tags:
        <input className="input input-bordered input-info w-full mb-3" type="text" name="tags" value={formData.tags.join(',')} onChange={handleTagsChange} />
      </label>
      <button className="btn btn-block btn-success" type="submit">Submit</button>
    </form>
    </div>
    
  );
};