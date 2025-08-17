export const JsonSuffixHandler = {
  request(context, next) {
    const { request } = context;
    console.log('JsonSuffixHandler - Original URL:', request.url);

    const updatedRequest = Object.assign({}, request, {
      url: request.url + '.json',
    });

    console.log('JsonSuffixHandler - Updated URL:', updatedRequest.url);
    return next(updatedRequest);
  },
};
