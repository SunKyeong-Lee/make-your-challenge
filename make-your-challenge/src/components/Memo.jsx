const Memo = (props) => {
  const { challengeItem } = props;
  

  return (
    <div>
      <h1>메모</h1>
      <p>{challengeItem.title}</p>
    </div>
  );
};

export default Memo;
