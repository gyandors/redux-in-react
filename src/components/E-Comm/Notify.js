export default function Notify(props) {
  let color;
  if (props.title === 'Sending...') {
    color = 'blue';
  } else if (props.title === 'Success!') {
    color = 'green';
  } else {
    color = 'red';
  }

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="text-white flex justify-between p-1 px-12"
    >
      <p>{props.title}</p>
      <p>{props.message}</p>
    </div>
  );
}
