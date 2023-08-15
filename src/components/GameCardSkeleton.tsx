import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card >
        <Skeleton width='300px' height='200px'>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Skeleton>
    </Card>
  )
}

export default GameCardSkeleton