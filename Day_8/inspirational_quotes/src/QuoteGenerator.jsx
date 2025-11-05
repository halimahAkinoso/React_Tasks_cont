import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quotesViewed, setQuotesViewed] = useState(0);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://zenquotes.io/api/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data[0]);
      setQuotesViewed(prevCount => prevCount + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyQuote = () => {
    if (quote) {
      const quoteText = `"${quote.q}" - ${quote.a}`;
      navigator.clipboard.writeText(quoteText)
        .then(() => alert('Quote copied to clipboard!'))
        .catch(err => console.error('Failed to copy text: ', err));
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Inspirational Quote Generator</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && quote && (
        <div>
          <p style={{ fontSize: '1.5em', fontStyle: 'italic' }}>"{quote.q}"</p>
          <p style={{ textAlign: 'right', fontWeight: 'bold' }}>- {quote.a}</p>
          <p>Quote Length: {quote.q.length}</p>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        <button onClick={fetchQuote} disabled={loading}>New Quote</button>
        <button onClick={copyQuote} disabled={loading || !quote} style={{ marginLeft: '10px' }}>Copy Quote</button>
      </div>
      <p style={{ marginTop: '20px' }}>Quotes viewed: {quotesViewed}</p>
    </div>
  );
};

export default QuoteGenerator;