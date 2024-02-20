import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Acep = () => {
    const location = useLocation();

    const { data, time } = location.state || { data: { name: '', id: '', sex: '' }, time: '' };

    const parts = time.split('-');
    const year = parseInt(parts[0], 10);
    const b_year = year + 543;
    const month = parts[1].padStart(2, '0');
    const day = parts[2].padStart(2, '0');
    const formattedDate = `${day}-${month}-${b_year}`;

    const formatID = (id) => {
        if (!id) return '';
        return `${id.substring(0, 1)}-${id.substring(1, 5)}-${id.substring(5, 10)}-${id.substring(10, 12)}-${id.substring(12)}`;
    };

    function permissions(time) {
        const startDate = new Date('2023-06-01');
        const endDate = new Date('2023-08-31');

        if (!time) {
            return 'undefined';
        }

        const dataDateObj = new Date(time);
        dataDateObj.setFullYear(dataDateObj.getFullYear() + 65);


        if (dataDateObj <= endDate) {
            return <span class="text-green-500">สามารถเข้ารับบริการได้</span>;
        } else {
            const originalDataDate = new Date(time);
            const sixMonthsBeforeStartDate = new Date(startDate);
            sixMonthsBeforeStartDate.setMonth(startDate.getMonth() - 6);
            const twoYearsAfterStartDate = new Date(startDate);
            twoYearsAfterStartDate.setFullYear(startDate.getFullYear() + 2);

            if ((originalDataDate >= sixMonthsBeforeStartDate && originalDataDate <= startDate) ||
                (originalDataDate > startDate && originalDataDate <= twoYearsAfterStartDate)) {
                return <span class="text-green-500">สามารถเข้ารับบริการได้</span>;
            } else {
                if (sixMonthsBeforeStartDate > endDate) {
                    return <span class="text-red-500">ไม่สามารถเข้ารับบริการได้เนื่องจากอายุจะครบ 6 เดือน วันที่ {sixMonthsBeforeStartDate.getDate()}/{sixMonthsBeforeStartDate.getMonth() + 1}/{sixMonthsBeforeStartDate.getFullYear() + 543} </span>;
                }
                return <span class="text-red-500">ไม่สามารถเข้ารับบริการได้เนื่องจากอายุจะครบ 65 ปี วันที่ {dataDateObj.getDate()}/{dataDateObj.getMonth() + 1}/{dataDateObj.getFullYear() + 543} </span>;

            }
        }
    }

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center bg-[url('https://www.cdg.co.th/website/wp-content/uploads/2023/05/Press-Release-Vaccine.webp')] font-sarabun">
        <div className="absolute inset-0 bg-white opacity-20"></div>
        {/* Adjust max-width and padding for different screens */}
        <div className="container max-w-full md:max-w-md p-4 md:p-6 bg-white rounded-lg shadow-lg z-10 relative">
            <h1 className="text-center text-2xl md:text-3xl font-semibold text-[#49B1DD] mb-4 md:mb-8">ข้อมูลการลงทะเบียน</h1>
            <div className="registration-info space-y-4">
                {/* Responsive text sizes and paddings */}
                <div className="info-item">
                    <label className="text-[#49B1DD]">ชื่อ-นามสกุล</label>
                    <p className="p-2 bg-[#49B1DD]/20 rounded-md">{data.name}</p>
                </div>
                <div className="info-item">
                    <label className="text-[#49B1DD]">เลขบัตรประชาชน</label>
                    <p className="p-2 bg-[#49B1DD]/20 rounded-md">{formatID(data.id)}</p>
                </div>
                <div className="info-item">
                    <label className="text-[#49B1DD]">เพศ</label>
                    <p className="p-2 bg-[#49B1DD]/20 rounded-md">{data.sex}</p>
                </div>
                <div className="info-item">
                    <label className="text-[#49B1DD]">วัน/เดือน/ปีเกิด</label>
                    <p className="p-2 bg-[#49B1DD]/20 rounded-md">{formattedDate}</p>
                </div>
            </div>
            <div className='text-center text-xl md:text-2xl mt-2 text-[#5C8A9E] font-bold'>
                {permissions(time)}
            </div>
            {/* Adjust button size and spacing */}
            <div className="text-center mt-4 md:mt-8">
                <Link to="/" className="ease-in-out delay-150 over:-translate-y-1 hover:scale-90 inline-block w-full bg-[#3389B0] text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-md hover:bg-[#46AAD5] transition duration-300">กลับหน้าหลัก</Link>
            </div>
        </div>
    </div>
    
    );
};

export default Acep;