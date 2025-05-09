import React, { useState } from 'react';

const services = [
  {
    icon: '💉',
    title: 'Injections & IV administration',
    description: 'We provide professional injection and IV services at your home.',
    price: 'PKR 1,500',
    questions: ['Do you have a valid prescription?', 'Do you have the medication Available?'],
  },
  {
    icon: '🩹',
    title: 'Bandage replacement & wound care',
    description: 'Expert wound care and dressing services to promote healing.',
    price: 'PKR 1,200',
    questions: ['Is the wound infected?'],
  },
  {
    icon: '🛌',
    title: 'Catheter care & post-op support',
    description: 'Support for post-surgical recovery and catheter management.',
    price: 'PKR 2,500',
    questions: ['Do you experience any pain or discomfort?'],
  },
  {
    icon: '🧘‍♀️',
    title: 'Physiotherapy',
    description: 'Customized physiotherapy sessions for all age groups.',
    price: 'PKR 4,500',
    questions: ['Do you have a doctor\'s referral?', 'Are you currently in pain?'],
  },
  {
    icon: '👵',
    title: 'Elderly & palliative care',
    description: 'Compassionate care services for elderly and terminally ill patients.',
    price: 'PKR 2,000/hr',
    questions: ['Is the patient bed-ridden?'],
  },
  {
    icon: '🩺',
    title: 'Routine vitals and monitoring',
    description: 'Regular monitoring of vitals to manage health conditions.',
    price: 'PKR 1,000',
    questions: ['Do you have chronic conditions?'],
  },
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [answers, setAnswers] = useState({});

  const openModal = (service) => {
    setSelectedService(service);
    setCheckboxChecked(false);
    setAnswers({});
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Services</h2>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <button key={index} style={styles.button} onClick={() => openModal(service)}>
            <div style={styles.card}>
              <div style={styles.icon}>{service.icon}</div>
              <h3 style={styles.title}>{service.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {selectedService && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.closeButton} onClick={closeModal}>✖</button>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
            <p style={{ fontWeight: 'bold' }}>Price: {selectedService.price}</p>

            {selectedService.questions.map((q, i) => (
              <div key={i} style={styles.questionBlock}>
                <p>{q}</p>
                <label>
                  <input
                    type="radio"
                    name={`question-${i}`}
                    value="yes"
                    checked={answers[i] === 'yes'}
                    onChange={() => handleAnswerChange(i, 'yes')}
                  /> Yes
                </label>
                <label style={{ marginLeft: '10px' }}>
                  <input
                    type="radio"
                    name={`question-${i}`}
                    value="no"
                    checked={answers[i] === 'no'}
                    onChange={() => handleAnswerChange(i, 'no')}
                  /> No
                </label>
              </div>
            ))}

            <div style={{ marginTop: '20px' }}>
              <label>
                <input
                  type="checkbox"
                  checked={checkboxChecked}
                  onChange={() => setCheckboxChecked(!checkboxChecked)}
                /> I have read the terms and conditions
              </label>
            </div>

            <div style={styles.orderButtonContainer}>
                <button
                    style={{
                    ...styles.orderButton,
                    backgroundColor: checkboxChecked ? '#28a745' : '#ccc',
                    cursor: checkboxChecked ? 'pointer' : 'not-allowed',
                    }}
                    disabled={!checkboxChecked}
                    onClick={() => alert(`Order placed for ${selectedService.title}`)}
                >
                    Place Order
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '60px 40px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '40px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  button: {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    borderRadius: '12px',
    transition: 'transform 0.2s ease',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '30px',
    width: '300px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  icon: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '18px',
    color: '#333',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '30px',
    width: '400px',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
    position: 'relative',
    textAlign: 'left',
  },
  closeButton: {
    position: 'absolute',
    right: '15px',
    top: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  questionBlock: {
    marginTop: '15px',
  },
  orderButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
  },
  orderButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  }  
};

export default Services;
