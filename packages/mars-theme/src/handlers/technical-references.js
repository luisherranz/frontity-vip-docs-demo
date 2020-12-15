export default {
  name: "tecnical references",
  pattern: "/technical-references/(.*)?/:slug",
  func: async ({ link, params, state, libraries }) => {
    // 1. Get the technical reference.
    const response = await libraries.source.api.get({
      endpoint: "technical-references",
      params: { slug: params.slug, _embed: true },
    });

    // 2. Add technical reference to the state.
    const [technicalReference] = await libraries.source.populate({
      response,
      state,
    });

    // 3. Get all the children.
    const childrenResponse = await libraries.source.api.get({
      endpoint: "technical-references",
      params: { parent: technicalReference.id, _embed: true },
    });

    // 4. Add technical reference children to the state.
    const children = await libraries.source.populate({
      response: childrenResponse,
      state,
    });

    // 5. Add link to data.
    Object.assign(state.source.data[link], {
      id: technicalReference.id,
      type: technicalReference.type,
      isPostType: true,
      isTechnicalReference: true,
      children: children.map(({ id, type }) => ({ id, type })),
    });
  },
};
