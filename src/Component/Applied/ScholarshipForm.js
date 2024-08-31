import React, { useState } from 'react';
import { Calendar, Phone, Book, DollarSign } from 'lucide-react';

function ScholarshipApplicationForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        phone: '',
        academicYear: '',
        marksheet: '',
        casteCertificate: '',
        incomeCertificate: '',
        field: '',
        scholarshipYears: '',
        domicile: ''
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number should be 10 digits';
        }
        if (!formData.academicYear) {
            newErrors.academicYear = 'Please select an academic year';
        }
        if (!formData.domicile) {
            newErrors.domicile = 'Domicile is required';
        }
        if (!formData.marksheet) {
            newErrors.marksheet = 'Marksheet is required';
        }
        if (!formData.casteCertificate) {
            newErrors.casteCertificate = 'Caste Certificate is required';
        }
        if (!formData.incomeCertificate) {
            newErrors.incomeCertificate = 'Income Certificate is required';
        }
        if (!formData.field) {
            newErrors.field = 'Please select a field of interest';
        }
        if (!formData.scholarshipYears) {
            newErrors.scholarshipYears = 'Please select scholarship duration';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onSubmit(formData);
            setSuccess(true);
            // Here you would typically send the form data to a server
            console.log('Scholarship application submitted successfully', formData);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg mt-10 p-6 rounded-lg">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg p-4">
                <h2 className="text-2xl font-bold">Scholarship Application Details</h2>
                <p className="text-purple-100">Please fill out all the required fields to complete your application.</p>
            </div>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                    <Phone className="absolute top-3 left-3 text-gray-400" size={18} />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div className="relative">
                    <Calendar className="absolute top-3 left-3 text-gray-400" size={18} />
                    <select
                        id="academicYear"
                        name="academicYear"
                        value={formData.academicYear}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Select Academic Year</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                    </select>
                    {errors.academicYear && <p className="text-red-500 text-sm mt-1">{errors.academicYear}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="marksheet" className="text-gray-700 block">Upload 12th Marksheet</label>
                    <input
                        type="file"
                        id="marksheet"
                        name="marksheet"
                        onChange={handleChange}
                        className="w-full border-gray-300 focus:border-purple-500 rounded-md p-2"
                    />
                    {errors.marksheet && <p className="text-red-500 text-sm">{errors.marksheet}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="domicile" className="text-gray-700 block">Upload Domicile</label>
                    <input
                        type="file"
                        id="domicile"
                        name="domicile"
                        onChange={handleChange}
                        className="w-full border-gray-300 focus:border-purple-500 rounded-md p-2"
                    />
                    {errors.domicile && <p className="text-red-500 text-sm">{errors.domicile}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="casteCertificate" className="text-gray-700 block">Upload Caste Certificate</label>
                    <input
                        type="file"
                        id="casteCertificate"
                        name="casteCertificate"
                        onChange={handleChange}
                        className="w-full border-gray-300 focus:border-purple-500 rounded-md p-2"
                    />
                    {errors.casteCertificate && <p className="text-red-500 text-sm">{errors.casteCertificate}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="incomeCertificate" className="text-gray-700 block">Upload Income Certificate</label>
                    <input
                        type="file"
                        id="incomeCertificate"
                        name="incomeCertificate"
                        onChange={handleChange}
                        className="w-full border-gray-300 focus:border-purple-500 rounded-md p-2"
                    />
                    {errors.incomeCertificate && <p className="text-red-500 text-sm">{errors.incomeCertificate}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-gray-700 block">Field of Interest</label>
                    <div className="flex items-center space-x-4">
                        {['science', 'arts', 'commerce'].map((field) => (
                            <div key={field} className="flex items-center">
                                <input
                                    type="radio"
                                    id={field}
                                    name="field"
                                    value={field}
                                    checked={formData.field === field}
                                    onChange={handleChange}
                                    className="text-purple-600"
                                />
                                <label htmlFor={field} className="ml-2 text-gray-700 capitalize">{field}</label>
                            </div>
                        ))}
                    </div>
                    {errors.field && <p className="text-red-500 text-sm">{errors.field}</p>}
                </div>

                <div className="relative">
                    <DollarSign className="absolute top-3 left-3 text-gray-400" size={18} />
                    <select
                        id="scholarshipYears"
                        name="scholarshipYears"
                        value={formData.scholarshipYears}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Select Scholarship Duration</option>
                        <option value="1">1 Year</option>
                        <option value="2">2 Years</option>
                        <option value="3">3 Years</option>
                        <option value="4">4 Years</option>
                    </select>
                    {errors.scholarshipYears && <p className="text-red-500 text-sm mt-1">{errors.scholarshipYears}</p>}
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300">
                    Submit Application
                </button>
            </form>

            {success && (
                <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Your application has been submitted successfully.</span>
                </div>
            )}
        </div>
    );
}

export default ScholarshipApplicationForm;