AWS_BUCKET=$1
if [ "$AWS_BUCKET" == "" ]; then
     echo "BUCKET NOT SPECIFIED"
     exit 1;
fi
echo "Deploying build to ${AWS_BUCKET}"
read -p "Are you sure? " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]
then
    aws s3 sync --cache-control 'max-age=86400' --exclude *.html out/ s3://${AWS_BUCKET}/
    aws s3 sync --cache-control 'no-store, no-cache, must-revalidate' out/ s3://${AWS_BUCKET}/
fi