// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
const unmockedFetch = global.fetch;

beforeAll(() => {
  const getDataByUrl = (url: string) => {
    switch (url) {
      case "https://api.github.com/users/octocat":
        return {
          name: "The Octocat",
          followers: "100",
          following: "200",
        };
      case "https://api.github.com/users/octocat/repos":
        return [
          { full_name: "octocat/boysenberry-repo-1" },
          { full_name: "octocat/git-consortium" },
        ];
      default:
        return {};
    }
  };
  global.fetch = (url: RequestInfo) => {
    return Promise.resolve({
      json: () => Promise.resolve(getDataByUrl(url.toString())),
    } as Response);
  };
});

afterAll(() => {
  global.fetch = unmockedFetch;
});
