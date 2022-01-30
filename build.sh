echo 'start build redis app'

pnpm run build

echo 'build redis app end'

echo 'start build docker ----> '

docker build -t registry.cn-shanghai.aliyuncs.com/chenc/redis-app:2.0.0 .
docker push registry.cn-shanghai.aliyuncs.com/chenc/redis-app:2.0.0

echo 'build docker end'
