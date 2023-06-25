const CAT_EMPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {
  const res = await fetch(CAT_EMPOINT_RAMDOM_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};
