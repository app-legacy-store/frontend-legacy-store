export interface YouTubeVideoSnippet {
   title: string;
   description: string;
   resourceId: {
   videoId: string;
   };
 }
 
 export interface YouTubeVideo {
   snippet: YouTubeVideoSnippet;
 }
 
 export interface YouTubeResponse {
   items: YouTubeVideo[];
   nextPageToken?: string;
 }
 