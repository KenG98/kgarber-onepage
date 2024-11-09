# kgarber.com

Built in Jekyll, hosted on Github Pages.

Jekyll theme [Minima](https://github.com/jekyll/minima).

## Dev Env

Build in docker to avoid installing stuff on your computer.

Run and attach to an ephemeral container:
```
docker run \
--rm \
--volume="$PWD:/srv/jekyll:Z" \
--publish 4000:4000 \
-it \
jekyll/builder bash
```

Start the project with these commands:
```
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

Access the website on `localhost:4000`

Ctrl-c to quit the development server.

Ctrl-d to quit bash. The docker container will be deleted.

Hosted by github pages. Push to master to publish changes.
