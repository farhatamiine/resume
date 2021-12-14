import moment from 'moment';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapPin,
  FaPhoneAlt,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './resume.scss';

export default function PreviewResume() {
  const resume = useSelector(state => state.personalInfo);

  const { firstName, lastName, profession, email, phone, city, country } =
    resume.userInfo;
  const { summary } = resume.summary;
  const { certifications } = resume;

  return (
    <div className="container" id="myResume">
      <div className="left_side">
        <div className="profileText">
          <div className="imgBox">
            <img
              src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/75096/ProfilePlaceholderSuit.png"
              alt="userface"
            />
          </div>

          {firstName && lastName && (
            <h2>
              {firstName} {lastName}
              <br />
              {profession && <span>{profession}</span>}
            </h2>
          )}
        </div>
        <div className="contactInfo">
          <h3 className="title">Contact Info</h3>
          <ul>
            {phone && (
              <li className="info">
                <FaPhoneAlt className="icon" />
                <span className="text">{phone}</span>
              </li>
            )}
            {city && country && (
              <li className="info">
                <FaMapPin className="icon" />
                <span className="text">
                  {city} {country}
                </span>
              </li>
            )}
            <li className="info">
              <FaGithub className="icon" />
              <span className="text">farhatamiine</span>
            </li>
            {email && (
              <li className="info">
                <FaEnvelope className="icon" />
                <span className="text">{email}</span>
              </li>
            )}
            <li className="info">
              <FaLinkedin className="icon" />
              <span className="text">aminefarhat</span>
            </li>
          </ul>
        </div>
        <div className="education">
          <h3 className="title">Education</h3>
          <ul>
            <li className="info">
              <div className="education_info">
                <h5 className="year">2016 – 2019</h5>
                <h5 className="degree">Ingénieur en Informatique et Réseaux</h5>
                <h4 className="school">
                  Ecole Marocaine des Sciences de l’Ingénieur
                </h4>
              </div>
            </li>
            <li className="info">
              <div className="education_info">
                <h5 className="year">2013 – 2015</h5>
                <h5 className="degree">
                  Diplôme de Technicien Spécialisé en développement informatique
                </h5>
                <h4 className="school">
                  Institut Spécialisée de Technologie Appliquée
                </h4>
              </div>
            </li>
            <li className="info">
              <div className="education_info">
                <h5 className="year">2013 – 2015</h5>
                <h5 className="degree">
                  Diplôme de Technicien Spécialisé en développement informatique
                </h5>
                <h4 className="school">
                  Institut Spécialisée de Technologie Appliquée
                </h4>
              </div>
            </li>
          </ul>
        </div>
        {certifications && (
          <div className="certification">
            <h3 className="title">Certification</h3>
            <ul>
              {certifications.map(
                ({
                  certificate_name,
                  dateOfIssue,
                  issuing_agency,
                  certificate_id,
                  expirationDate,
                }) => (
                  <li className="info">
                    <div className="certification_info">
                      <h5 className="year">
                        {moment(dateOfIssue).format('MMMM YYYY')} -
                        {expirationDate ? (
                          <span className="mr-7">
                            {moment(expirationDate).format('MMMM YYYY')}
                          </span>
                        ) : (
                          'No Expiration'
                        )}
                      </h5>
                      <h5 className="degree">{certificate_name}</h5>
                      <h4 className="school">{issuing_agency}</h4>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="right_side">
        <div className="about">
          <h3 className="title">Summary</h3>
          <p className="text" dangerouslySetInnerHTML={{ __html: summary }}></p>
        </div>
        <div className="experience">
          <h3 className="title">Experience</h3>
          <ul>
            {resume.experience &&
              resume.experience.map(exp => (
                <li className="info">
                  <div className="experience_info">
                    <h5 className="position">{exp.job_title}</h5>
                    <div className="info_container">
                      <h4 className="company">
                        <span className="employer">{exp.employer}</span>|
                        <span className="city">{exp.city}</span> -
                        <span className="country">{exp.country}</span>
                      </h4>
                      <h5 className="year">
                        {moment(exp.startDate).format('MMMM YYYY')} -{' '}
                        {exp.end
                          ? moment(exp.end).format('MMMM YYYY')
                          : 'Present'}
                      </h5>
                    </div>

                    {exp.description && (
                      <div
                        className="description"
                        dangerouslySetInnerHTML={{ __html: exp.description }}
                      ></div>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
