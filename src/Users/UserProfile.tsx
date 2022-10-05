import * as React from 'react';
import {
    SinglePerson,
    PersonImage,
    Icon,
    FullN,
    PersonInfo,
    Locate
} from '../Shared/Styles'

export interface IAppProps {
    name?: string,
    avatar?: string,
    firstName?: string,
    lastName?: string,
    location?: string
}

const UserProfile = ({name, avatar, firstName, lastName, location}: IAppProps) => {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
    <SinglePerson data-testid="user-profile">
        <PersonImage>
            <img src="https://secure.gravatar.com/avatar/dacc916f5af8b779abce64bdc0720fca?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png" alt="profile pic" />
            <Icon>
                <i className="fab fa-html5"></i>
            </Icon>
        </PersonImage>
        <PersonInfo >
            <FullN>{firstName} {lastName}</FullN>
            <Locate>{location}</Locate>
        </PersonInfo>
    </SinglePerson>
</div>
  );
}

export default UserProfile