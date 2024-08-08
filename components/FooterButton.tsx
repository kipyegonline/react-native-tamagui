import React from "react";
import { Stack, Text } from "tamagui";
type Props = {
  selected: boolean;
  onPress: () => void;
  title: string;
  icon: React.ReactNode;
};
export const FooterButton = ({ selected, onPress, title, icon }: Props) => {
  return (
    <Stack
      jc="center"
      ai="center"
      opacity={selected ? 1 : 0.5}
      pt="$2"
      flex={1}
      onPress={onPress}
    >
      {icon}
      <Text color="white" fontSize={12}>
        {title}
      </Text>
    </Stack>
  );
};

type State = { isShowing: boolean };
type CProps = {};

class TamaguiApp extends React.Component<CProps, State> {
  constructor(props: CProps) {
    super(props);
    this.state = { isShowing: false };
  }

  componentDidMount(): void {
    setTimeout(this.updateChange, 5000);
  }
  updateChange = () => {
    this.setState({ isShowing: true });
  };
  renderSomething() {
    return <small>Something small</small>;
  }
  render() {
    const { isShowing } = this.state;
    return (
      <section>
        <p>React clas component</p>
        {isShowing ? <p>Showing state</p> : <p>Not showing....</p>}
        {this.renderSomething()}
      </section>
    );
  }
}
