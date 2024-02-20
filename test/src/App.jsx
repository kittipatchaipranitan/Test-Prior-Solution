import React, { useState } from 'react';
import "./App.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState({ name: '', id: '', sex: '', date: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', data);
      navigate('/Accep', { state: { data } });
    } else {
      console.log('Form submission failed due to validation errors.');
    }
  };

  const resetValue = () => {
    setData({ name: '', id: '', sex: '', date: '' });
    setErrors({});
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 'กรุณากรอกชื่อ-นามสกุล';
      isValid = false;
    }

    if (!data.id.trim()) {
      errors.id = 'กรุณากรอกเลขบัตรประชาชน';
      isValid = false;
    }

    if (!data.sex) {
      errors.sex = 'กรุณาเลือกเพศ';
      isValid = false;
    }

    if (!data.date) {
      errors.date = 'กรุณากรอกวัน/เดือน/ปี';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  return (
    <div className="relative flex justify-end pr-48 items-center h-screen bg-no-repeat bg-cover bg-center bg-[url('https://www.cdg.co.th/website/wp-content/uploads/2023/05/Press-Release-Vaccine.webp')] font-sarabun">

      <div className="absolute inset-0 bg-white opacity-20"></div>

      <div className="container max-w-sm p-6 bg-white rounded-lg shadow-lg z-10 relative">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-3xl font-semibold text-[#49B1DD] mb-8"  >ลงทะเบียนรับวัคซีน</h1>
          <div className="info-item">
            <span className="text-[#49B1DD]">ชื่อ-นามสกุล </span><br />
            <input
              type='text'
              name='name'
              pattern='^[a-zA-Zก-๏\s]+$'
              className="p-2 bg-[#49B1DD]/20  rounded-md"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </div>



          <span className="text-[#49B1DD]">เลขบัตรประชาชน</span><br />
          <div className="info-item">
            <input
              type='text'
              name='id'
              pattern='^[0-9]+$'
              className="p-2 bg-[#49B1DD]/20  rounded-md"
              value={data.id}
              onChange={(e) => setData({ ...data, id: e.target.value })}
            />
            {errors.id && <div style={{ color: 'red' }}>{errors.id}</div>}

          </div>
          <br />
          <div className="info-item">
            <select
              name='sex'
              className="p-2 bg-[#49B1DD]/20  rounded-md"
              value={data.sex}
              onChange={(e) => setData({ ...data, sex: e.target.value })}
            >
        
          <option value="">เพศ</option>
          <option value="ชาย">ชาย</option>
          <option value="หญิง">หญิง</option>
        </select>
        
        {errors.sex && <div style={{ color: 'red' }}>{errors.sex}</div>}
        </div>
        

        <span className="text-[#49B1DD]">วัน/เดือน/ปีเกิด </span><br />
        <input
          type='date'
          name='date'
          className="p-2 bg-[#49B1DD]/20  rounded-md mb-2"
          value={data.date}
          onChange={(e) => setData({ ...data, date: e.target.value })}
        />
        {errors.date && <div style={{ color: 'red' }}>{errors.date}</div>}
        <br />

        <button type='submit' className="  ease-in-out delay-150 over:-translate-y-1 hover:scale-90 inline-block w-full bg-[#3389B0] text-white font-bold py-3 px-6 rounded-md hover:bg-[#46AAD5] transition duration-300 mb-2">ยืนยัน</button>
        <button type='button' onClick={resetValue} className="ease-in-out delay-150 over:-translate-y-1 hover:scale-90 inline-block w-full bg-[#3389B0] text-white font-bold py-3 px-6 rounded-md hover:bg-[#46AAD5] transition duration-300">ล้างค่า</button>

      </form>
    </div>
    </div >
  );
}

export default App;
