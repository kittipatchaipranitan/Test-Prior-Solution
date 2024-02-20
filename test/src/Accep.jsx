import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Acep = () => {
    const location = useLocation();
    const { data } = location.state || { name: '', id: '', sex: '', date: '' };
    const formatID = (id) => {
        if (!id) return '';
        return `${id.substring(0, 1)}-${id.substring(1, 5)}-${id.substring(5, 10)}-${id.substring(10, 12)}-${id.substring(12)}`;
    };

    function permissions(data) {
        const startDate = new Date('2023-06-01');
        const endDate = new Date('2023-08-31');

        if (!data || !data.date) {
            return 'data or data.date is undefined';
        }

        const dataDateObj = new Date(data.date);
        dataDateObj.setFullYear(dataDateObj.getFullYear() + 65);

        if (dataDateObj <= endDate) {
            return 'working';
        } else {
            const originalDataDate = new Date(data.date);
            const sixMonthsBeforeStartDate = new Date(startDate);
            sixMonthsBeforeStartDate.setMonth(startDate.getMonth() - 6);
            const twoYearsAfterStartDate = new Date(startDate);
            twoYearsAfterStartDate.setFullYear(startDate.getFullYear() + 2);

            if ((originalDataDate >= sixMonthsBeforeStartDate && originalDataDate <= startDate) ||
                (originalDataDate > startDate && originalDataDate <= twoYearsAfterStartDate)) {
                return <span className="text-green-500">สามารถเข้ารับบริการได้</span>;
            } else {
                return <span className="text-red-500">ไม่สามารถเข้ารับบริการได้</span>;
            }
        }
    }

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center bg-[url('https://www.cdg.co.th/website/wp-content/uploads/2023/05/Press-Release-Vaccine.webp')] font-sarabun">
            <div className="absolute inset-0 bg-white opacity-20"></div>
            <div className="container max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 md:p-6 bg-white rounded-lg shadow-lg z-10">
                <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-[#49B1DD] mb-4 md:mb-8">ข้อมูลการลงทะเบียน</h1>
                <div className="space-y-4">
                    <div>
                        <label className="text-[#49B1DD]">ชื่อ-นามสกุล</label>
                        <p className="p-2 bg-[#49B1DD]/20 rounded-md">{data.name}</p>
                    </div>
                    <div>
                        <label className="text-[#49B1DD]">เลขบัตรประชาชน</label>
                        <p className="p-2 bg-[#49B1DD]/20 rounded-md">{formatID(data.id)}</p>
                    </div>
                    <div>
                        <label className="text-[#49B1DD]">เพศ</label>
                        <p className="p-2 bg-[#49B1DD]/20 rounded-md">{data.sex}</p>
                    </div>
                    <div>
                        <label className="text-[#49B1DD]">วัน/เดือน/ปีเกิด</label>
                        <p className="p-2 bg-[#49B1DD]/20 rounded-md">{data.date}</p>
                    </div>
                </div>
                <div className='text-center text-lg sm:text-xl md:text-2xl mt-2 text-[#5C8A9E] font-bold'>
                    {permissions(data)}
                </div>
                <div className="text-center mt-8">
                    <Link to="/" className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 inline-block w-full bg-[#3389B0] text-white font-bold py-2 sm:py-3 px-4 rounded-md hover:bg-[#46AAD5] transition duration-300">กลับหน้าหลัก</Link>
                </div>
            </div>
        </div>
    );
};

export default Acep;
