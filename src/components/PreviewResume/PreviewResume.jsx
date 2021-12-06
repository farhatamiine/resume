import React from 'react';
import { useSelector } from 'react-redux';

const styles = {
  A4Paper: {
    padding: '0.5cm',
    border: '1px solid #000',
    width: '816px',
    height: '1056px',
    fontSize: '1.5rem',
    margin: '10px',
  },
};

export default function PreviewResume() {
  const resume = useSelector(state => state.personalInfo);

  const { first_name, last_name, profession, email, phone, city, state } =
    resume.userInfo;
  const { summary } = resume.summary;
  return (
    <div style={styles.A4Paper} id="myResume">
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-7">
          <div className="about mb-2">
            <h1 className="text-4xl capitalize font-semibold">
              {first_name} {last_name}
            </h1>
            <h2 className="text-xl mt-1 capitalize font-semibold">
              {profession}
            </h2>
          </div>
          <div className="summary">
            <p className="text-base text-justify">{summary}</p>
          </div>
        </div>
        <div className="lg:col-span-4 flex justify-start flex-col items-end">
          <p className="text-base">
            <span className="mr-1">{city},</span>
            <span>{state}</span>
          </p>
          <p className="text-base">{phone}</p>
          <p className="text-base">{email}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-11">
        <div className="lg:col-span-7">
          <p className="text-blue-400 text-base font-medium uppercase">
            Experience
          </p>
          <div className="experience">
            {resume.experience.map(exp => (
              <div>
                <div className="mb-1">
                  <h3 className="text-xl font-semibold">{exp.employer}</h3>
                  <p className="text-lg mb-0">{exp.job_title}</p>
                </div>
                <div className="mb-1">
                  <p className="text-base font-medium">
                    {exp.start} - {exp.end}
                  </p>
                </div>
                <div className="mb-1">
                  <p className="text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4">
          <p className="text-blue-400 text-base font-medium uppercase">
            FORMATIONS
          </p>
        </div>
      </div>
    </div>
  );
}
