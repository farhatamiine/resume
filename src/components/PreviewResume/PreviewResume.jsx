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
      <div className="grid grid-cols-12 gap-6">
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
          <div className="experience pt-3">
            {resume.experience.map(exp => (
              <div className="mb-5">
                <div className="mb-1">
                  <h3 className="text-lg text-gray-600 font-medium uppercase">
                    {exp.employer} - {exp.city}
                  </h3>
                  <p className="text-xl font-semibold mb-0">{exp.job_title}</p>
                </div>
                <div className="mb-1">
                  <p className="text-base font-medium">
                    {exp.start} - {exp.end}
                  </p>
                </div>
                <div className="mb-1">
                  <p className="text-sm text-justify">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-blue-400 text-base font-medium uppercase">
            Competences
          </p>
          <div className="experience pt-3">
            <ul className="pl-4 list-disc">
              {resume.skills.map(skill => (
                <li className="text-base capitalize">{skill}</li>
              ))}
            </ul>
          </div>
          <p className="text-blue-400 text-base font-medium uppercase">
            Certifications
          </p>
          <div className="experience pt-3">
            {resume.certifications.map(cert => (
              <div className="mb-5">
                <div className="mb-1">
                  <h3 className="text-lg text-gray-600 font-medium uppercase">
                    {cert.issuing_agency}
                  </h3>
                  <p className="text-xl font-semibold mb-0">
                    {cert.certificate_name} - {cert.certificate_id}
                  </p>
                </div>
                <div className="mb-1">
                  <p className="text-base font-medium">{cert.dateOfIssue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <p className="text-blue-400 text-base font-medium uppercase ">
            FORMATIONS
          </p>
          <div className="experience pt-3">
            {resume.education.map(edu => (
              <div className="mb-5">
                <div className="mb-1">
                  <p className="text-sm font-semibold mb-0">{edu.fieldStudy}</p>
                  <h5 className="text-base text-blue-600 font-light">
                    {edu.city} - {edu.country}
                  </h5>
                </div>
                <div className="mb-1">
                  <p className="text-sm text-justify">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-blue-400 text-base font-medium uppercase">
            Languages
          </p>
          <div className="experience pt-3">
            <ul className="pl-4 list-disc">
              {resume.languages.map(lang => (
                <li className="text-base capitalize">{lang.languages}</li>
              ))}
            </ul>
          </div>
          <p className="text-blue-400 mt-5 text-base font-medium uppercase">
            Loisirs
          </p>
          <div className="experience pt-3">
            <ul className="pl-4 list-disc">
              {resume.hobbies.map(lang => (
                <li className="text-base capitalize">{lang}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
