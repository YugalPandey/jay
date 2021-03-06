

export function selectSessionUser(state) {
  const { session } = state.entities;
  const users = Object.keys(session).map(k => session[k]);
  return (users.length == 1) ? users[0] : undefined;
}

export function selectLocalSessionUser(state) {
  const { session } = state.locals;
  if (!session) {
    return undefined;
  }
  const users = Object.keys(session).map(k => session[k]);
  return (users.length == 1) ? users[0] : undefined;
}
