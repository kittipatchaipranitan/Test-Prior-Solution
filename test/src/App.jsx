import React, { useState } from 'react';
import "./App.css"
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
    <div className="relative flex justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center bg-[url('https://www.cdg.co.th/website/wp-content/uploads/2023/05/Press-Release-Vaccine.webp')] font-sarabun">
      <div className="absolute inset-0 bg-white opacity-20"></div>
      <div className="container max-w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl p-4 md:p-6 bg-white rounded-lg shadow-lg z-10 relative">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl md:text-3xl font-semibold text-[#49B1DD] mb-4 md:mb-8">ลงทะเบียนรับวัคซีน</h1>
          <div className="mb-4">
            <label className="block text-[#49B1DD]">ชื่อ-นามสกุล</label>
            <input
              type='text'
              name='name'
              pattern='^[a-zA-Zก-๏\s]+$'
              className="w-full p-2 bg-[#49B1DD]/20 rounded-md"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </div>

          <div className="mb-4">
            <label className="block text-[#49B1DD]">เลขบัตรประชาชน</label>
            <input
              type='text'
              name='id'
              pattern='^[0-9]+$'
              className="w-full p-2 bg-[#49B1DD]/20 rounded-md"
              value={data.id}
              onChange={(e) => setData({ ...data, id: e.target.value })}
            />
            {errors.id && <div style={{ color: 'red' }}>{errors.id}</div>}
          </div>

          <div className="mb-4">
            <label className="block text-[#49B1DD]">เพศ</label>
            <select
              name='sex'
              className="w-full p-2 bg-[#49B1DD]/20 rounded-md"
              value={data.sex}
              onChange={(e) => setData({ ...data, sex: e.target.value })}
            >
              <option value="">เลือกเพศ</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
            </select>
            {errors.sex && <div style={{ color: 'red' }}>{errors.sex}</div>}
          </div>

          <div className="mb-4">
            <label className="block text-[#49B1DD]">วัน/เดือน/ปีเกิด</label>
            <input
              type='date'
              name='date'
              className="w-full p-2 bg-[#49B1DD]/20 rounded-md"
              value={data.date}
              onChange={(e) => setData({ ...data, date: e.target.value })}
            />
            {errors.date && <div style={{ color: 'red' }}>{errors.date}</div>}
          </div>

          <button type='submit' className="w-full bg-[#3389B0] text-white font-bold py-2 px-4 rounded-md hover:bg-[#46AAD5] transition duration-300 mb-2">ยืนยัน</button>
          <button type='button' onClick={resetValue} className="w-full bg-[#3389B0] text-white font-bold py-2 px-4 rounded-md hover:bg-[#46AAD5] transition duration-300">ล้างค่า</button>
        </form>
      </div>
    </div>
  );
}

export default App;
