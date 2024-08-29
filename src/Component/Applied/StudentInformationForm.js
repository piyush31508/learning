import React, { useState } from 'react';

const StudentInformationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        field: '',
        marksheet: null,
        casteCertificate: null,
        incomeCertificate: null,
    });

    const [errors, setErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Student name is required';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        }
        if (!formData.field) {
            newErrors.field = 'Please select a field of interest';
        }
        if (!formData.marksheet) {
            newErrors.marksheet = '12th Marksheet is required';
        }
        if (!formData.casteCertificate) {
            newErrors.casteCertificate = 'Caste certificate is required';
        }
        if (!formData.incomeCertificate) {
            newErrors.incomeCertificate = 'Income certificate is required';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Reset errors and simulate a form submission
        setErrors({});
        setSubmitSuccess(false);

        try {
            // Example of handling form data
            // You can replace this with an actual API call
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('field', formData.field);
            formDataToSend.append('marksheet', formData.marksheet);
            formDataToSend.append('casteCertificate', formData.casteCertificate);
            formDataToSend.append('incomeCertificate', formData.incomeCertificate);

            // Simulate API submission
            console.log('Submitting form data...');
            console.log(formDataToSend);

            // Simulate success response
            setSubmitSuccess(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitSuccess(false);
        }
    };

    return (
      <div className="bg-gradient-to-br w-[94.9rem] from-blue-400 to-blue-600 min-h-screen flex items-center justify-center">
      <div className="container bg-gradient-to-br from-purple-400 to-red-500 p-8 rounded-lg shadow-lg max-w-md mx-auto">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Student Information Form</h1>

                {submitSuccess && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline"> Your form has been submitted successfully.</span>
                    </div>
                )}

                <form className='bg-gradient-to-br from-purple-400 to-red-500 p-8 rounded-lg  max-w-md mx-auto' onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-group mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Student Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-blue-400'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500' : 'focus:ring-blue-400'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
                    </div>

                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Field of Interest:</label>
                        <div className="flex space-x-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="field"
                                    value="engineering"
                                    checked={formData.field === 'engineering'}
                                    onChange={handleChange}
                                    className="form-radio text-blue-600 focus:ring-blue-400"
                                />
                                <span className="ml-2 text-gray-700">Engineering</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="field"
                                    value="medical"
                                    checked={formData.field === 'medical'}
                                    onChange={handleChange}
                                    className="form-radio text-blue-600 focus:ring-blue-400"
                                />
                                <span className="ml-2 text-gray-700">Medical</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="field"
                                    value="arts"
                                    checked={formData.field === 'arts'}
                                    onChange={handleChange}
                                    className="form-radio text-blue-600 focus:ring-blue-400"
                                />
                                <span className="ml-2 text-gray-700">Arts</span>
                            </label>
                        </div>
                        {errors.field && <p className="text-red-500 text-xs italic">{errors.field}</p>}
                    </div>

                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">12th Marksheet:</label>
                        <label
                            htmlFor="marksheet"
                            className="flex items-center justify-center px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                        >
                            Choose a file
                        </label>
                        <input
                            type="file"
                            id="marksheet"
                            name="marksheet"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            required
                            className="sr-only"
                        />
                        {errors.marksheet && <p className="text-red-500 text-xs italic">{errors.marksheet}</p>}
                    </div>

                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Caste Certificate:</label>
                        <label
                            htmlFor="casteCertificate"
                            className="flex items-center justify-center px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                        >
                            Choose a file
                        </label>
                        <input
                            type="file"
                            id="casteCertificate"
                            name="casteCertificate"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            required
                            className="sr-only"
                        />
                        {errors.casteCertificate && <p className="text-red-500 text-xs italic">{errors.casteCertificate}</p>}
                    </div>

                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Income Certificate:</label>
                        <label
                            htmlFor="incomeCertificate"
                            className="flex items-center justify-center px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                        >
                            Choose a file
                        </label>
                        <input
                            type="file"
                            id="incomeCertificate"
                            name="incomeCertificate"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            required
                            className="sr-only"
                        />
                        {errors.incomeCertificate && <p className="text-red-500 text-xs italic">{errors.incomeCertificate}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StudentInformationForm;
