declare namespace rct {
    interface IEvent {
        id: number,
        title: string,
        image: ICloudinaryImage
    }
    interface ICloudinaryImage {
        public_id: string,
        format: string
    }
}