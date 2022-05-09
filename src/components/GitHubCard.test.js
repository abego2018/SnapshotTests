import GitHubCard from "./GitHubCard";
import renderer from 'react-test-renderer'

test ('renders a snapshot', () => {
    const card = renderer.create(<GitHubCard/>).toJSON()
    expect(card).toMatchSnapshot()
  })