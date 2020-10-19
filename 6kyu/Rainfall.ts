//Rainfall

export class G964 {
  public static mean = (t, s) => {
    if (
      s
        .split("\n")
        .map((el) => el.split(":")[0])
        .filter((el) => el == t).length == 0
    )
      return -1;
    const d = s
      .split("\n")
      .filter((el) => el.slice(0, t.length) == t)[0]
      .split(":")[1]
      .split(",");
    const a = d.map((el) => +el.slice(3)).reduce((a, b) => a + b) / d.length;
    return a;
  };
  public static variance = (t, s) => {
    if (
      s
        .split("\n")
        .map((el) => el.split(":")[0])
        .filter((el) => el == t).length == 0
    )
      return -1;
    const d = s
      .split("\n")
      .filter((el) => el.slice(0, t.length) == t)[0]
      .split(":")[1]
      .split(",");
    const a = d.map((el) => +el.slice(3));
    const sum = a.reduce((a, b) => a + b) / d.length;
    const res =
      a.map((el) => Math.abs(sum - el) ** 2).reduce((a, b) => a + b) / d.length;
    return res;
  };
}
