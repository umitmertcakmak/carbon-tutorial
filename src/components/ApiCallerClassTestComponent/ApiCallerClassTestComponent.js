import React from 'react';

class ApiCaller extends React.Component {
  constructor() {
    super();
    this.state = {
      commitHistory: [],
      page: 1,
      isLoading: true,
    };
    this.loadMoreCommit = this.loadMoreCommit.bind(this);
  }

  componentDidMount() {
    this.loadCommitHistory();
  }

  loadMoreCommit() {
    const { page } = this.state;
    this.setState(
      {
        page: page + 1,
      },
      () => this.loadCommitHistory()
    );
  }

  loadCommitHistory() {
    const { page } = this.state;
    // Fetching data from FaceBook Jest Repo
    fetch(
      `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/vnd.github.cloak-preview',
        }),
      }
    )
      .then(res => res.json())
      .then(response =>
        this.setState({ commitHistory: response.items, isLoading: false })
      )
      .catch(error => console.log(error));
  }

  render() {
    const { commitHistory, isLoading } = this.state;
    return (
      <div>
        <h1> API calls with React Class Component </h1>
        {isLoading && <p>Wait Im Loading comments for you</p>}

        {commitHistory.length !== 0 && (
          <button onClick={() => this.loadMoreCommit()}>
            Load More Commits
          </button>
        )}

        {commitHistory.map((c, index) => (
          <div key={index}>
            {c.commit && (
              <>
                <div>
                  <h2 style={{ textDecoration: 'Underline' }}>
                    {c.commit.committer.name}
                  </h2>
                  <p>{c.commit.message}</p>
                </div>
                <hr />
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export { ApiCaller };
