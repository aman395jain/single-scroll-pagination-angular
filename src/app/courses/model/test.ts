export const testData = [
  {
    image: [
      { imageId: "imageId11", imageType: "imageType11" },
      { imageId: "imageId12", imageType: "imageType12" },
      { imageId: "imageId13", imageType: "imageType13" }
    ],
    imageDesc: "cds Image"
  },
  {
    image: [{ imageId: "imageId21", imageType: "imageType21" }],
    imageDesc: "cds Image"
  },
  {
    image: [{ imageId: "imageId31", imageType: "imageType31" }],
    imageDesc: "cds Image"
  }
];

export interface imageData {
  image: { imageId: string; imageType: string }[];
  imageDesc: string;
}

export class testDataWrapper {
  private data1 = testData;
  constructor() {
    this.testMethod();
  }

  get data() {
    return this.data1;
  }

  testMethod() {
    return "hello";
  }

  static testReturn() {
    return new testDataWrapper();
  }
}
