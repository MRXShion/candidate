import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [
  { 
    id: 1,
    thaiName: 'จอห์น โด',
    name: 'John Doe',
    gender: 'm',
    position: 'developer',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 ห้วยขวาง, กรุงเทพฯ',
    education: 'ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์',
    experience: 'มีประสบการณ์ 5 ปี ในการพัฒนาซอฟต์แวร์',
    skills: 'JavaScript, Angular, Node.js',
    salary: 30000,
    date: '2025-04-01',
    portfolio: 'Github'
  },
  {
    id: 2,
    thaiName: 'เจน สมิธ',
    name: 'Jane Smith',
    gender: 'f',
    position: 'designer',
    email: 'jane@example.com',
    phone: '098-765-4321',
    address: '456 ลาดพร้าว, กรุงเทพฯ',
    education: 'ปริญญาตรี สาขาการออกแบบกราฟิก',
    experience: 'มีประสบการณ์ 3 ปี ในการออกแบบ UX/UI',
    skills: 'Photoshop, Figma, Illustrator',
    salary: 28000,
    date: '2025-04-01',
    portfolio: 'Behance'
  },
  {
    id: 3,
    thaiName: 'อลิซ บราวน์',
    name: 'Alice Brown',
    gender: 'f',
    position: 'developer',
    email: 'alice@example.com',
    phone: '091-234-5678',
    address: '789 รามคำแหง, กรุงเทพฯ',
    education: 'ปริญญาโท สาขาวิศวกรรมซอฟต์แวร์',
    experience: 'มีประสบการณ์ 6 ปี ในการพัฒนา Web Application',
    skills: 'Java, Spring Boot, Angular',
    salary: 35000,
    date: '2025-04-01',
    portfolio: 'LinkedIn'
  },
  {
    id: 4,
    thaiName: 'บ็อบ ไวท์',
    name: 'Bob White',
    gender: 'm',
    position: 'designer',
    email: 'bob@example.com',
    phone: '085-678-9123',
    address: '321 บางนา, กรุงเทพฯ',
    education: 'ปริญญาตรี สาขาศิลปกรรม',
    experience: 'มีประสบการณ์ 4 ปี ในการออกแบบเว็บไซต์',
    skills: 'Sketch, Adobe XD, HTML/CSS',
    salary: 27000,
    date: '2025-04-02',
    portfolio: 'Dribbble'
  },
  {
    id: 5,
    thaiName: 'สมชาย ใจดี',
    name: 'Somchai Jaidee',
    gender: 'm',
    position: 'developer',
    email: 'somchai@example.com',
    phone: '086-111-2233',
    address: '99 สาทร, กรุงเทพฯ',
    education: 'ปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์',
    experience: 'มีประสบการณ์ 7 ปี ในงาน Full Stack Development',
    skills: 'Python, Django, React',
    salary: 40000,
    date: '2025-04-02',
    portfolio: 'GitLab'
  },
  {
    id: 6,
    thaiName: 'สุภาพร ทองดี',
    name: 'Supaporn Thongdee',
    gender: 'f',
    position: 'developer',
    email: 'supaporn@example.com',
    phone: '089-222-3344',
    address: '88 บางกอกน้อย, กรุงเทพฯ',
    education: 'ปริญญาตรี สาขาวิทยาการข้อมูล',
    experience: 'มีประสบการณ์ 2 ปี ในการทำ Data Analysis',
    skills: 'SQL, Python, Power BI',
    salary: 32000,
    date: '2025-04-02',
    portfolio: 'Kaggle'
  },
  {
    id: 7,
    thaiName: 'ธีรภัทร เก่งกล้า',
    name: 'Teerapat Kengkla',
    gender: 'm',
    position: 'designer',
    email: 'teerapat@example.com',
    phone: '083-333-4455',
    address: '11 รังสิต, ปทุมธานี',
    education: 'ปริญญาตรี สาขาเทคโนโลยีมัลติมีเดีย',
    experience: 'มีประสบการณ์ 5 ปี ในการออกแบบกราฟิกสำหรับเว็บและโมบาย',
    skills: 'Canva, Figma, CSS Animation',
    salary: 29000,
    date: '2025-04-03',
    portfolio: 'Portfolio Website'
  },
  {
    id: 8,
    thaiName: 'กมลวรรณ ศรีสวัสดิ์',
    name: 'Kamolwan Srisawat',
    gender: 'f',
    position: 'developer',
    email: 'kamolwan@example.com',
    phone: '082-444-5566',
    address: '101 เชียงใหม่, เชียงใหม่',
    education: 'ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์',
    experience: 'มีประสบการณ์ 3 ปี ในการพัฒนา Mobile App',
    skills: 'Flutter, Dart, Firebase',
    salary: 31000,
    date: '2025-04-03',
    portfolio: 'GitHub'
  },
  {
    id: 9,
    thaiName: 'อดิศักดิ์ กล้าหาญ',
    name: 'Adisak Klaharn',
    gender: 'm',
    position: 'developer',
    email: 'adisak@example.com',
    phone: '080-555-6677',
    address: '77 ขอนแก่น, ขอนแก่น',
    education: 'ปริญญาโท สาขาปัญญาประดิษฐ์',
    experience: 'มีประสบการณ์ 6 ปี ในการพัฒนา Machine Learning Model',
    skills: 'Python, TensorFlow, Scikit-learn',
    salary: 45000,
    date: '2025-04-03',
    portfolio: 'Google Scholar'
  },
  {
    id: 10,
    thaiName: 'ณัฐธิดา มีบุญ',
    name: 'Natthida Meeboon',
    gender: 'f',
    position: 'designer',
    email: 'natthida@example.com',
    phone: '087-666-7788',
    address: '55 หาดใหญ่, สงขลา',
    education: 'ปริญญาตรี สาขาการออกแบบดิจิทัล',
    experience: 'มีประสบการณ์ 4 ปี ในการออกแบบ Motion Graphic',
    skills: 'After Effects, Premiere Pro, Adobe XD',
    salary: 29500,
    date: '2025-04-04',
    portfolio: 'YouTube Portfolio'
  }
  ];

  constructor() { }

  getData(): Observable<any[]> {
    return of(this.data);
  }

  filterData(gender: string, position: string): Observable<any[]> {
    const filtered = this.data.filter(person => {
      const matchesGender = gender ? person.gender === gender : true;
      const matchesPosition = position ? person.position === position : true;

      return matchesGender && matchesPosition;
    });

    return of(filtered);
  }

  getPersonById(id: string): Observable<any> {
    const person = this.data.find(p => p.id === +id);
    return of(person);
  }
}
