import Image1 from '../../../assets/images/person-1.png'
import Image2 from '../../../assets/images/person-2.png'
import Image3 from '../../../assets/images/person-3.png'


interface DataCard{
    imagePerson: string,
    name: string,
    job: string,
    rating: string,
    message: string
}

export const dataCards: DataCard[] = [
    {
        imagePerson: Image1,
        name: 'Floyd Miles',
        job: 'Freelancer',
        message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.',
        rating: '4.8'
    },
    {
        imagePerson: Image2,
        name: 'Robert Fox',
        job: 'Freelancer',
        message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.',
        rating: '4.8'
    },
    {
        imagePerson: Image3,
        name: 'Courtney Henry',
        job: 'Freelancer',
        message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.',
        rating: '4.8'
    }
]