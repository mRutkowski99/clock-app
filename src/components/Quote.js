import refreshImg from "../assests/icon-refresh.svg";
import { StyledQuote } from "./styled/Quote.styled";
import { useEffect, useState } from "react";
import useFetch from "../hooks/use-fetch";

const Quote = (props) => {
  const [quote, setQuote] = useState({});

  const { isLoading, error, getData } = useFetch();

  const transformData = (data) => {
    setQuote({
      author: data.author,
      content: data.content,
    });
  };

  useEffect(() => {
    getData("https://api.quotable.io/random", transformData);
  }, []);

  const refreshQuoteHandler = () => {
    getData("https://api.quotable.io/random", transformData);
  };

  return (
    <StyledQuote showMore={props.showMore} loading={isLoading}>
      {error && <p>${error}</p>}
      {!error && (
        <>
          <p className="quote">{quote.content}</p>
          <p className="author">{quote.author}</p>
          <button onClick={refreshQuoteHandler}>
            <img src={refreshImg} alt="Refresh icon" />
          </button>
        </>
      )}
    </StyledQuote>
  );
};

export default Quote;
