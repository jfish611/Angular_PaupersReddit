export interface RootObject {
    data: Data2;
  }

  export interface Data2 {
    children: Child[];
  }
  
  export interface Child {
    data: Post;
  }
    
  export interface Post {
    title: string;
    thumbnail: string;
    permalink: string;
  }

  
