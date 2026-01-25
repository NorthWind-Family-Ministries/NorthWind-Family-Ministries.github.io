import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'

export default function Privacy() {
    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Personal Information Privacy Commitment Statement
            </Typography>
            <Typography variant="body1" paragraph>
                To safeguard the personal information entrusted to NorthWind Family Ministries (NorthWind) and to comply with the Personal Information Protection and Electronic Documents Act ("PIPEDA") and other applicable legislation, NorthWind is committed to the following principles:
            </Typography>
            <List dense>
                {[
                    { label: 'Accountability', id: 'accountability' },
                    { label: 'Identifying purposes', id: 'identifying-purposes' },
                    { label: 'Consent', id: 'consent' },
                    { label: 'Limiting collection', id: 'limiting-collection' },
                    { label: 'Limiting use, disclosure, and retention', id: 'limiting-use-disclosure-retention' },
                    { label: 'Accuracy', id: 'accuracy' },
                    { label: 'Safeguards', id: 'safeguards' },
                    { label: 'Openness', id: 'openness' },
                    { label: 'Individual access', id: 'individual-access' },
                    { label: 'Data breach', id: 'data-breach' },
                    { label: 'Challenging compliance', id: 'challenging-compliance' },
                ].map((item, idx) => (
                    <ListItem key={item.id} sx={{ py: 0 }}>
                        <ListItemText
                            primary={
                                <Link href={`#${item.id}`} underline="hover" color="primary">
                                    {`${idx + 1}. ${item.label}`}
                                </Link>
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <Typography variant="body1" paragraph>
                These principles will be enacted in accordance with the “The Policy To Protect Personal Information” (the “Policy”).
            </Typography>
            <Typography variant="body1" paragraph>
                It is NorthWind’s intent not to sell, give or share your personal information with any other organization or person, unless required to do so by a court or government agency.
            </Typography>
            <Typography variant="body1" paragraph>
                This policy applies to NorthWind donors, programs, participants and volunteers other than Counselling Services. Counselling has its own privacy policy. Personal information is not shared between Counselling Services and staff of other programs. Personal information from non-counselling programs is shared with counselling so that they can refer counselling clients to other NorthWind programs.
            </Typography>
            <Typography variant="body1" paragraph>
                NorthWind, its directors, officers, employees and volunteers are required to comply with the principles and the Policy and will be given access to personal information solely to perform the services provided by NorthWind.
            </Typography>
            <Typography variant="body1" paragraph>
                Other persons or organizations who act for, or on behalf of, NorthWind are also required to comply with the principles and the Policy and will be given restricted access to personal information solely to perform the services provided for NorthWind.
            </Typography>
            <Typography variant="body1" paragraph>
                NorthWind has designated Deanna Blanchard to be NorthWind’s Personal Information Compliance Officer. Any inquiry, request or concern related to privacy matters should be made in writing to NorthWind at:
            </Typography>
            <Box sx={{ my: 2 }}>
                <Typography variant="subtitle1">Deanna Blanchard</Typography>
                <Typography variant="subtitle1">NorthWind Family Ministries</Typography>
                <Typography variant="body1">807-622-5837</Typography>
                <Link href="mailto:deanna.blanchard@northwindfm.org" variant="body1" underline="hover" color="primary">
                    deanna.blanchard@northwindfm.org
                </Link>
            </Box>
            <Divider sx={{ my: 2 }} />    
            <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', my: 2 }}>
                <Box>
                    <Typography variant="subtitle1">Mailing address:</Typography>
                    <Typography variant="body1">P.O. Box 10648</Typography>
                    <Typography variant="body1">Thunder Bay, ON P7B 6V1</Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1">Street Address:</Typography>
                    <Typography variant="body1">138 May St. S</Typography>
                    <Typography variant="body1">Thunder Bay, ON P7E 1B3</Typography>
                </Box>
            </Box>
            <Typography variant="body1" paragraph>
                A printed copy of the Policy may be requested by mail or e-mail at the above address.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Policy To Protect Personal Information</Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="accountability">1. ACCOUNTABILITY</Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    Deanna Blanchard is hereby appointed as the personal information compliance Officer (the “Officer”).
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    All persons, whether employees, volunteers, or board or committee members who collect, process, or use personal information shall be accountable for such information to the Officer.
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    This policy shall be made available upon request.
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    Any personal information transferred to a third party for processing is subject to this policy. The Officer shall use contractual or other appropriate means to protect personal information at a level comparable to this policy while a third party is processing this information.
                </Typography>
            </Box>
            <Typography variant="body1" paragraph>
                At August 31, 2022 NorthWind has data stored with the following organizations:
            </Typography>
            <List dense>
                {['Pay Pal', 'ACS Realm'].map((item) => (
                    <ListItem key={item} sx={{ py: 0 }}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="body1" paragraph>
                Both organizations have data servers in the United States. All other data is on paper or in a database on a local computer and is stored on site at NorthWind facilities.
            </Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>
                <Typography component="li" variant="body1" paragraph>
                    Personal information to be collected, retained, or used by NorthWind shall be done so only after the Officer gives written approval. This information shall be secured according to the Officer’s instructions.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    Any person who believes NorthWind uses personal information collected, retained, or used for purposes other than those that person explicitly approved may contact the Officer to register a complaint or to make any related inquiry.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    Upon receiving a complaint from any person regarding the collection, retention, or use of personal information, the Officer shall promptly investigate the complaint and notify the person who complained about his findings and corrective action taken, if any. The Officer will report all inquires and complaints to the Executive Director, complaints will be reported to the Board of Directors
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    Upon receiving the response from the Officer, the person who filed the complaint may, if he is not satisfied, appeal to NorthWind’s Board of Directors to review and determine the disposition of the complaint at issue. Contact Raymond Neckoway, board chair, at <Link href="mailto:raymond.neckoway@northwindfm.org" underline="hover" color="primary">raymond.neckoway@northwindfm.org</Link>.
                </Typography>
                <Typography variant="body1" paragraph>
                    The determination of the Board of Directors shall be final and the Officer shall abide by and implement any of its recommendations.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall communicate and explain this policy and give training regarding it to all employees and volunteers who might be in a position to collect, retain, or use personal information.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall prepare and disseminate information to the public which explains NorthWind’s protection of personal information policies and procedures.
                </Typography>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="identifying-purposes">2. IDENTIFYING PURPOSES</Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>  
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall document the purpose for which personal information is collected to comply with the openness and individual access principles outlined below.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall determine what information will be needed to fulfill the purposes for which it is to be collected so as to comply with the limited collection principle below.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that the purpose is specified at or before the time of collecting the personal information from an individual.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that the information collected will not be used for any other purpose before obtaining the individual’s approval, unless the new purpose is required by law.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that a person collecting personal information will be able to explain to the individual why this is being done.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that limited collection, limited use, disclosure, and retention principles are respected in identifying why personal information is to be collected.
                </Typography>
            </Box>
            

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="consent">3. CONSENT</Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>  
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that no condition is attached to supplying benefits, because of NorthWind’s activities, requiring the individual to give consent for the collection, use, or disclosure of information beyond that required to fulfil the explicitly specified and legitimate purposes.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The staff who collect information will confirm that the individual from whom personal information is collected consents to its collection and to it being used within NorthWind, unless obtaining the consent would be inappropriate. Sometimes personal information can be collected, used, or disclosed without the individual’s knowledge and consent. For example, legal, medical, or security reasons might make seeking consent impossible or impractical. Seeking consent might be impossible or inappropriate when the individual is a minor, seriously ill, or mentally incapacitated.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The staff will ensure that the individual can reasonably understand why and how the information will be used when the consent is given.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The staff shall ensure that express consent is obtained wherever possible and appropriate. In rare circumstances where, in the Officer’s opinion, having regard to the information’s sensitivity and the policy’s purpose and intent, implied consent might be acceptable. (Implied consent might exist if a participant is new to a program and new to NorthWind and they did not give written consent at the time of registration.)
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    In obtaining consent, the staff shall ensure that the individual’s reasonable expectations are respected. (For example, a person giving his/her name and address to NorthWind to receive its newsletter also reasonably expects that NorthWind will use that information to send other information about NorthWind.) It is important that the individual’s consent includes an understanding that the individual may receive fund raising newsletters, as well.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The staff shall ensure that the express consent obtained from an individual is clear and in an appropriately verifiable form. (For example, an application form may be used and kept on file where the individual consents to the collection and specific use; a checkoff box may be used to permit information already on file to be used for a new purpose; or additional consent might be given by email which would require an electronic record to be maintained.)
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The staff shall ensure that the individual understands that they may withdraw consent at any time, subject to legal or contractual restrictions and reasonable notice. The individual shall promptly be informed of the withdrawal’s implications.
                </Typography>
            </Box>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="limiting-collection">4. LIMITING COLLECTION</Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>  
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that personal information will not be collected indiscriminately. Both the amount and type of information collected shall be limited to that which is necessary to fulfil the purposes identified. He/she shall specify the type of information to be collected, according to the Openness principle (Section 8 below).
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that information is collected only by fair and lawful means without misleading or deceiving individuals as to the reason.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that the identifying purposes and consent principles are followed in identifying why personal information is to be collected.
                </Typography>
            </Box>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="limiting-use-disclosure-retention">5. LIMITING USE, DISCLOSURE, AND RETENTION</Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>  
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that personal information shall not be used or disclose for purposes other than those for which it was collected, except with the consent of the individual or as required by law, and any use of personal information shall be properly documented.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that all personal information is destroyed, erased, or made anonymous as soon as the purpose for which it was collected is no longer relevant, or as permitted by law. There shall be an automatic review of the need to continue retaining personal information annually. It is important to disclose at the time of collection that information collected for Safe People and Places will be retained permanently, and information collected from counselling clients will be kept permanently. Except as required to be retained by law, all personal information shall be deleted, erased, or made anonymous no later than seven years after the purpose for which it was collected has been completed.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that all use, disclosure, and retention decisions are made in light of the identifying purposes principle (Section 2 above), the consent principle (Section 3 above), and the individual access principle (Section 9 below).
                </Typography>
            </Box>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="accuracy">6. ACCURACY</Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>  
                <Typography  component="li" variant="body1" paragraph>
                    The Officer shall reasonably ensure that the personal information is accurate, complete, and up to date, taking into account the individual’s interests. He shall ensure that the information is sufficiently accurate, complete, and up to date to minimize the possibility that inappropriate information might be used to make a decision about an individual.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that personal information used on an ongoing basis, including information that is disclosed to third parties (such as statistical information to foundations or governments, should generally be accurate and up to date, unless limits to the requirement for accuracy are clearly set out.
                </Typography>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="safeguards">7. SAFEGUARDS</Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>  
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that NorthWind has security safeguards to protect personal information against loss or theft, as well as unauthorized access, disclosure, copying, use, or modification. He shall do this regardless of the format in which NorthWind holds the information.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    Depending on the information’s sensitivity, the Officer may permit reasonable discretion regarding the information that has been collected: the amount, distribution, format, and the method of storage. A higher level of protection shall be implemented to safeguard more sensitive information, giving consideration to the above consent principles.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that the protection methods include, physical measures, for example, locked filing cabinets and restricted access to offices; organizational measures, for example, security clearance and limiting access on a “need-to-know” basis; and technological measures, for example, the use of passwords and encryption.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that all employees and volunteers know the importance of keeping personal information confidential.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that care is taken when personal information is disposed of or destroyed to prevent unauthorized parties from gaining access to it.
                </Typography>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="openness">8. OPENNESS</Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>  

                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that NorthWind is open about its policies and practices regarding the management of personal information. The policies and information about the related practices shall be available without unreasonable effort in a form generally understandable.
                </Typography>
                <Typography component="li" variant="body1" paragraph sx={{ mb: 0 }}>
                    The Officer shall ensure that the information available shall include:
                </Typography>
                <Box component="ul" sx={{ pl: 4, my: 1 }}>
                    <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        the name, title and address of the Officer who is accountable for NorthWind’s policies and practices and to whom complaints or inquiries can be forwarded;
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        the means of gaining access to personal information held by NorthWind;
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        a description of the type of personal information held by NorthWind, including a general account of its use;
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        a copy of any brochures or other information that explain NorthWind’s policies, standards, or codes.
                    </Typography>
                    <Typography component="li" variant="body1" paragraph>
                        The Officer shall ensure the information is available either in a brochure at the locations NorthWind operates, online, or through the mail.
                    </Typography>
                </Box>
                
            </Box>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="individual-access">9. INDIVIDUAL ACCESS</Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>  
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that upon request NorthWind shall inform an individual whether the NorthWind holds personal information about him/her. If possible, the information’s source shall also be given. NorthWind shall allow the individual access to this information. NorthWind may, however, choose to make sensitive health information about its employees or volunteers available through a medical or mental health practitioner. NorthWind shall also account for the use that has been made or is being made of this information and give an account as to the third parties to whom it has been disclosed. (Note, If the Officer believes for valid reasons that access to personal information should be denied, he shall consult legal counsel before making such a decision.)
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    A person requesting his/her personal information may be required by the Officer to give sufficient information to permit NorthWind to provide an account of the existence, use, and disclosure of personal information. Information shall be used only for the purpose for which it was obtained.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    If NorthWind has supplied personal information about an individual to third parties, the Officer shall ensure that an attempt is made to be as specific as possible. For example, the individual will be notified that their information will be used to do Safe People and Places screening including a check with police and others to obtain a criminal record check and a vulnerable record check. When to give a list of organizations to which it has actually disclosed information about an individual is impossible, NorthWind shall provide a list of organizations to which it might have disclosed information about the individual.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that NorthWind responds to an individual’s request within a reasonable time and at minimal or no cost to the individual. The requested information shall be made available in a generally understandable form. For example, NorthWind shall explain abbreviations or codes it uses to record information.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that when an individual successfully demonstrates the inaccuracy or incompleteness of personal information, NorthWind shall amend the information as required. Depending on the information challenged, amendment involves the correction, deletion, or addition of information.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall ensure that when a challenge is not resolved to the individual’s satisfaction, NorthWind shall record the unresolved challenge’s substance. When appropriate, the unresolved challenge’s existence shall be transmitted to third parties having access to the information in question.
                </Typography>
            </Box>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="data-breach">10. DATA BREACH</Typography>
            <Typography variant="body1" paragraph>
                If a data breach is discovered, the Officer will take the following steps:
            </Typography>
            <List dense>
                {[
                    'Gather as complete information as possible',
                    'Retain a professional data breach consulting firm',
                    'Contain and stop the breach',
                    'Assess the risk to individuals subject to the breach',
                    'Notify legal counsel',
                    'Notify the individuals who are subject to the breach',
                    'Evaluate the systems and implement procedures to prevent a future breach',
                ].map((item, idx) => (
                    <ListItem key={item} sx={{ py: 0 }}>
                        <ListItemText primary={`${idx + 1}. ${item}`} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }} id="challenging-compliance">11. CHALLENGING COMPLIANCE</Typography>
            <Box component="ul" sx={{ pl: 3, my: 1 }}>  
                <Typography component="li" variant="body1" paragraph>
                    The Officer is authorized to address a challenge concerning compliance with the above principles.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall develop procedures to receive and respond to complaints or inquiries about the policies and practices regarding the handling of personal information. The compliance procedures shall be easily accessible and simple to use.
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                    The Officer shall inform individuals inquiring about lodging complaints that relevant complaint procedures exist.
                </Typography>
                <Typography component="li"  variant="body1" paragraph>
                    The Officer shall investigate all complaints. If a complaint is found to be justified, the Officer shall take appropriate measures, including, if necessary, amending the policies and practices.
                </Typography>
            </Box>
        </Container>
    )
}
