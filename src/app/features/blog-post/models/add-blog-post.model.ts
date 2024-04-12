export interface AddBlogPost{
    title: string;
    shortDescription: string;
    content: string;
    featureImageUrl: string;
    urlHandle: string;
    author: string;
    publishDate: Date;
    isVisible: boolean;
}