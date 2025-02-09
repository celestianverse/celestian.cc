import { Button } from "@/components/Button/Button";
import { COLORS } from "@/constants/colors";

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            color={color}
            size="l"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            color={color}
            size="m"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            color={color}
            size="s"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            color={color}
            size="xs"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            variant="outline"
            color={color}
            size="l"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            variant="outline"
            color={color}
            size="m"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            variant="outline"
            color={color}
            size="s"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            variant="outline"
            color={color}
            size="xs"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            variant="ghost"
            color={color}
            size="l"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            variant="ghost"
            color={color}
            size="m"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            variant="ghost"
            color={color}
            size="s"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      {COLORS.map((color) => {
        return (
          <Button
            key={color}
            variant="ghost"
            color={color}
            size="xs"
          >
            Button
          </Button>
        );
      })}
      <br />
      <br />
      <Button>Button</Button>
      <br />
      <br />
      <Button as="div">Button</Button>
      <br />
      <br />
      <Button as="button">Button</Button>
      <br />
      <br />
      <Button as="a" href="https://www.google.ru/" target="_blank">Button</Button>
      <br />
      <br />
      <Button as="Link" href="/about">Button</Button>
    </div>
  );
};

export default HomePage;
