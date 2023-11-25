# Not using BUN 1.0.0 because of this issue: https://github.com/oven-sh/bun/issues/5007
FROM node:latest

WORKDIR /app/crypto-cover-us

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1

# For deploying the build version
RUN npm run build

# and
CMD npm start

# OR for starting Next.js in development, comment above two lines and uncomment below line
# CMD npm run dev

# Note: Don't expose ports here, Compose will handle that for us
