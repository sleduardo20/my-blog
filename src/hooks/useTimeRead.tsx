import { useEffect, useState } from "react";

import { ContentProps } from "components/Content";
import { RichText } from "prismic-dom";

type TimeReadProps = {
  content: ContentProps[];
};

export const useTimeRead = ( {content } :TimeReadProps)=>{
    const [totalWordsPost, setTotalWordsPost] = useState([]);
    
    useEffect(() => {
      const wordsContent = content.reduce((acc: any, item, index) => {
        acc[index] = item.heading
          ? item.heading.split(" ").length
          : 0 + RichText.asText(item.body).split(" ").length;
    
        return acc;
      }, []);
    
      setTotalWordsPost(wordsContent);
    }, [content]);
    
    
    const totalWords = totalWordsPost.reduce((acc, word) => acc + word, 0);
    
    const readingTime = Math.round(totalWords / 90);

  return  { readingTime }
};


