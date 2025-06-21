import sliderImg1 from '../assets/images/png/slider-img.png';
import sliderImg2 from '../assets/images/png/slider-img2.png';
import sliderImg3 from '../assets/images/png/slider-img3.png';

export const initialFormValues = {
    Kategorie: '',
    Titel: '',
    Datum: '',
    Standort: '',
    Preis: '',
    Details: ''
};

export const categoryOptions = [
    { value: '', label: 'Kategorie' },
    { value: 'music', label: 'Music' },
    { value: 'sport', label: 'Sport' },
    { value: 'kultur', label: 'Kultur' }
];

export const slides = [sliderImg1, sliderImg2, sliderImg3];

export const ALPHABET_LIST = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "#",
]

export const musicTypes = ["All", "Pop", "Rock", "More"];