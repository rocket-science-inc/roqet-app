declare namespace rct {
    interface IEvent {
        id: number,
        title: string,
        image: ICloudinaryImage
    }
    interface ICloudinaryImage {
        id: string
    }
}