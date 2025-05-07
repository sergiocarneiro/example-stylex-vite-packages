import * as css from "@stylexjs/stylex";
import { colors } from "@acme/tokens/reference.stylex";

export default function Component()
{
  return (
    <main {...css.props(styles.root)}>
      <h1 {...css.props(styles.title)}>Primary</h1>
      <h3 {...css.props(styles.subtitle)}>Secondary</h3>
    </main>
  );
}


// MARK: Styles

const styles = css.create({
  root: {
    padding: "2rem",
  },
  title: {
    color: colors.primary,
  },
  subtitle: {
    color: colors.secondary,
  },
});
