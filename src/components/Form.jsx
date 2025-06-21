import React, { useState } from 'react';
import Input from './common/Input';

const Form = () => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(prev => [...prev, ...files]);
    };
    const [form, setForm] = useState({
        category: '',
        title: '',
        Datum: '',
        location: '',
        price: '',
        details: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };
    const initialValues = {
        Kategorie: '',
        Titel: '',
        Datum: '',
        Standort: '',
        Preis: '',
        Details: ''
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));

        setFormErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    return (
        <div className='py-[60px] px-4'>
            <div className='max-w-[768px] mx-auto'>
                <h2 className='font-bold text-4xl text-center pb-5'>Event einsenden</h2>
                <p className='font-light text-xl max-w-[768px] text-center pb-5'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <div className='bg-color shadow py-2 rounded-4xl pl-4 border border-dashed border-[#D1E0E9] max-w-[763px] overflow-x-auto'>
                    <div className="flex flex-wrap gap-4 items-center min-w-max">
                        {images.map((img, idx) => (
                            <div key={idx} className="w-24 h-24 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center shrink-0">
                                <img
                                    src={URL.createObjectURL(img)}
                                    alt="preview"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                        <label className="w-24 h-20 flex flex-col items-center justify-center border border-dashed border-[#D4D4D4] rounded-xl cursor-pointer shrink-0">
                            <span className="text-3xl text-[#007AFF]">+</span>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="mt-5 max-w-[763px] relative">
                    <select
                        name="category"
                        value={form.category}
                        onChange={handleInputChange}
                        className="appearance-none w-full p-4 rounded-4xl border focus:outline-none focus:ring focus:ring-black border-[#D1E0E9] text-sm font-bold bg-white shadow-sm"
                        required
                    >
                        <option value="">Kategorie</option>
                        <option value="music">Music</option>
                        <option value="sport">Sport</option>
                        <option value="kultur">Kultur</option>
                    </select>
                    <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 text-base">
                        ▼
                    </div>
                </div>

                <div className='flex gap-5 mt-5'>
                    <Input
                        name="Titel"
                        value={formValues.Titel}
                        onChange={changeHandler}
                        placeholder="Titel"
                        error={formErrors.Titel}
                    />
                    <Input
                        name="Datum"
                        value={formValues.Datum}
                        onChange={changeHandler}
                        placeholder="Datum"
                        error={formErrors.Datum}
                    />
                </div>

                <div className='flex gap-5 mt-3'>
                    <Input
                        name="Standort"
                        value={formValues.Standort}
                        onChange={changeHandler}
                        placeholder="Standort"
                        error={formErrors.Standort}
                    />
                    <Input
                        name="Preis"
                        value={formValues.Preis}
                        onChange={changeHandler}
                        placeholder="Preis"
                        error={formErrors.Preis}
                    />
                </div>
                <textarea
                    placeholder="Details zur Veranstaltung"
                    className="w-full py-[55px] pl-4 bg-color text-[#737376] leading-[72%] text-sm font-bold shadow border-[#D1E0E9] rounded-4xl resize-none focus:outline-none focus:ring focus:ring-black"
                ></textarea>
                <div className='justify-center flex mt-5'>

                    <button className="font-bold text-white px-28 py-4 cursor-pointer rounded-full bg-gradient-to-r from-[#0071BB] to-[#39A3E7] hover:from-[#39A3E7] hover:to-[#0071BB] hover:bg-gradient-to-l transition-all duration-300"
                    >
                        Event einsenden
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Form;
