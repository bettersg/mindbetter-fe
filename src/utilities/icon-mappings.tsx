import { ReactComponent as AntiStigmatismIcon } from "../assets/icons/mental-health-issue/anti-stigmatism.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/socials/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/socials/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/socials/linkedin.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/socials/youtube.svg";
import { ReactComponent as TiktokIcon } from "../assets/icons/socials/tiktok.svg";
import { ReactComponent as SupportGroupIcon } from "../assets/icons/services/support-group.svg";
import { ReactComponent as SpeakingEngagementsIcon } from "../assets/icons/services/speaking-engagements.svg";
import { ReactComponent as PartnershipOpportunitiesIcon } from "../assets/icons/services/partnership-opportunities.svg";
import { ReactComponent as FundingSupportIcon } from "../assets/icons/services/funding-support.svg";
import { ReactComponent as CounsellingIcon } from "../assets/icons/services/counselling.svg";
import { ReactComponent as CorporateTrainingIcon } from "../assets/icons/services/corporate-training.svg";
import { SocialType } from "../data/enums/social-type.enum";
import { MentalHealthIssue } from "../data/enums/mental-health-issue.enum";
import { Service } from "../data/enums/service.enum";

export function GetIconForIssue(issue: MentalHealthIssue) {
  switch (issue) {
    case MentalHealthIssue.AntiStigmatism:
      return <AntiStigmatismIcon />;
    default:
      return null;
  }
}

export function GetIconForService(service: Service) {
  switch (service) {
    case Service.CorporateTraining:
      return <CorporateTrainingIcon />;
    case Service.Counselling:
      return <CounsellingIcon />;
    case Service.FundingSupport:
      return <FundingSupportIcon />;
    case Service.PartnershipOpportunities:
      return <PartnershipOpportunitiesIcon />;
    case Service.SpeakingEngagements:
      return <SpeakingEngagementsIcon />;
    case Service.SupportGroup:
      return <SupportGroupIcon />;
    default:
      return null;
  }
}

export function GetIconForSocials(socialType: SocialType) {
  switch (socialType) {
    case SocialType.Facebook:
      return <FacebookIcon />;
    case SocialType.Youtube:
      return <YoutubeIcon />;
    case SocialType.Instagram:
      return <InstagramIcon />;
    case SocialType.LinkedIn:
      return <LinkedInIcon />;
    case SocialType.TikTok:
      return <TiktokIcon />;
    default:
      return null;
  }
}
