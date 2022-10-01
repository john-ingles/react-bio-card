import Buttons from "./Button";
export default function Info() {
  return (
    <section className="info--section">
      <div className="info--profile-pic" />
      <div className="info--body">
        <div className="info--name">John Ingles</div>
        <div className="info--job-title">Python Developer</div>
        <a href="https://github.com/john-ingles">
          <div className="info--website">https://github.com/john-ingles</div>
        </a>
        <Buttons />
      </div>
    </section>
  );
}
