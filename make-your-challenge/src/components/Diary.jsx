const Diary = (props) => {
  const { challengeItem } = props;

  return (
    <div>
      <h1>일기</h1>
      <p>{challengeItem.title}</p>
    </div>
  );
};

export default Diary;
