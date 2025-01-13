function apk({ name, Benar }) {
    return (
      <li>
        {Benar
          ? name + " true"
          : name == "Abdilah"
          ? "my name is " + name
          : name + " false"}
      </li>
    );
  }