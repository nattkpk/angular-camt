import { Component } from '@angular/core';
import { CaptionItem } from './caption-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string | null;
  count: number;
  imgSrc: string = '';

  captionList: CaptionItem[] = [
    {
      id: 1,
      message: "เป็นคนไม่เอาถ่าน เพราะที่บ้านมีเตาเเก๊ส",
      icon: "./assets/icons/ic_funny_01.png",
    },
    {
      id: 2,
      message: "ผมไม่เคยดีครับ เพราะผมแตกปลาย",
      icon:  "./assets/icons/ic_funny_02.png"
    },
    {
      id: 3,
      message: "แคปชั่นไม่รู้ แต่แคปหมูไม่แน่",
      icon:  "./assets/icons/ic_funny_03.png"
    },
    {
      id: 4,
      message: "ไม่มีหรอกหัวหอมให้เธอหั่น มีแต่หัวฉันนี่แหละให้เธอหอม",
      icon:  "./assets/icons/ic_funny_04.png"
    },
  ];

  constructor() {
    this.title = this.randomCaption();
    this.count = 0;
  }

  randomCaption() {
    let randomIndex: number;
    let newCaption: CaptionItem;
    do {
      randomIndex = this.getRandomInt(this.captionList.length);
      newCaption = this.captionList[randomIndex];
    } while (newCaption.message === this.title && this.captionList.length > 1);
    
    this.count++;
    this.imgSrc = newCaption.icon;
    return newCaption.message;
  }
  

  randomCaptionAndDelete() {
    if (this.captionList.length === 0) return null;
    const randomIndex = this.getRandomInt(this.captionList.length);
    const newCaption = this.captionList[randomIndex];
    this.count++;
    this.captionList.splice(randomIndex, 1);

    this.imgSrc = newCaption.icon;
    return newCaption.message;
  }

  handleClickButton() {
    if (this.captionList.length > 1) {
      this.title = this.randomCaption();
    } else {
      this.title = this.captionList[0].message;
    }
  }

  handleClickDeButton() {
    this.title = this.randomCaptionAndDelete();
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

restart() {
  this.captionList = [
    {
      id: 1,
      message: "เป็นคนไม่เอาถ่าน เพราะที่บ้านมีเตาเเก๊ส",
      icon: "./assets/icons/ic_funny_01.png",
    },
    {
      id: 2,
      message: "ผมไม่เคยดีครับ เพราะผมแตกปลาย",
      icon:  "./assets/icons/ic_funny_02.png"
    },
    {
      id: 3,
      message: "แคปชั่นไม่รู้ แต่แคปหมูไม่แน่",
      icon:  "./assets/icons/ic_funny_03.png"
    },
    {
      id: 4,
      message: "ไม่มีหรอกหัวหอมให้เธอหั่น มีแต่หัวฉันนี่แหละให้เธอหอม",
      icon:  "./assets/icons/ic_funny_04.png"
    },
  ];

  this.title = this.randomCaption();
  this.count = 0;
}
}

//Type inference
// public messages: string[] = [
//   'เป็นคนไม่เอาถ่าน เพราะที่บ้านมีเตาเเก๊ส',
//   'ผมไม่เคยดีครับ เพราะผมแตกปลาย',
//   'แคปชั่นไม่รู้ แต่แคปหมูไม่แน่',
//   'ตั้งใจลบเธอออกจากสมอง แต่สิ่งที่หายไป คือสมอง เหลือแต่เธอ',
//   'เชื่อในพรหมลิขิต แต่แพ้บัตรเครดิตตลอด',
//   'ดึงหน้าพี่ไม่ชอบ แต่ถ้าดึงไปกอดพี่ไม่ว่า',
//   'ไม่มีหรอกหัวหอมให้เธอหั่น มีแต่หัวฉันนี่แหละให้เธอหอม',
//   'ติดเหล้าติดเบียร์ก็ดีอยู่แล้ว อย่าไปติดใครเลยมันเจ็บ',
//   'ช่วงนี้ออกกำลังกายด้วยการเดิน เดินหาอะไรกิน',
//   'เป็นคนถูกรักว่ายากแล้ว เป็นคนถูกหวยยากกว่าอีก',
//   'ลองชากาแฟก่อนมั้ย ถ้าไม่ใช่ค่อยไปชาบู',
//   'เรื่องกินขอให้บอก ว่างตลอดทักมาเล่อะ',
//   'บางกว่าใจ คือเส้นผมเราไง',
//   'หนังที่ดีที่สุด ยกให้หนังไก่ทอด',
//   'วันนี้ไม่เห็นค่า วันหน้าคือพรุ่งนี้',
//   'สาระเดียวที่มีให้ตอนนี้ คือสารภาพรัก ฮิ้วว',
//   'ไก่ที่หมดจาน ดีกว่าการที่เธอหมดใจ',
// ];

