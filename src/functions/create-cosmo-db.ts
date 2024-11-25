import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions'

export async function createCosmoDB(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`)

  const name = request.query.get('name') || (await request.text()) || 'world'

  return { body: `Hello,  ${name}!, this is a deployed function` }
}

app.http('create-cosmo-db', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: createCosmoDB,
})
