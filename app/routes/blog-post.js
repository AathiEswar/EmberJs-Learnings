import Route from '@ember/routing/route';

export default class BlogPostRoute extends Route {
    async model(){
        const returnData = {
            title : "Blog Post",
            author : "Aathi Eswar S",
            body : "this is for body"
        }
        return returnData
    }
}
